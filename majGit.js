function fetchHexmap(hexmap){
  const owner = 'ManeaRoliste';
  const repo = 'genesys';
  const path = 'hexmap.json';
  const branch = 'main'; // ou la branche que vous souhaitez modifier
  const token = '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';

  async function updateJSONFile() {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Récupérer le fichier actuel
    const response = await fetch(url, {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    const data = await response.json();

    // Décoder le contenu actuel en base64
    const content = atob(data.content);

    // Convertir le contenu JSON en un objet
    let jsonContent = JSON.parse(content);

    // Modifier le contenu JSON selon vos besoins
    jsonContent = hexmap;

    // Réencoder le contenu modifié en base64
    const updatedContent = btoa(JSON.stringify(jsonContent, null, 2));

    // Préparer la requête PUT pour mettre à jour le fichier
    const updateResponse = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Mise à jour du fichier JSON',
            content: updatedContent,
            sha: data.sha,
            branch: branch
        })
    });

    if (updateResponse.ok) {
        console.log('Le fichier a été mis à jour avec succès.');
    } else {
        console.error('Une erreur est survenue lors de la mise à jour du fichier.');
    }
  }

  updateJSONFile();
}
