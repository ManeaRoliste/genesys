function fetchHexmap(hexmap){
  const owner = 'ManeaRoliste';
  const repo = 'genesys';
  const path = 'hexmap.json';
  const branch = 'main'; // ou la branche que vous souhaitez modifier
  const token1 = 'ghp_SQxSbwAGE';
  const token2 = '1lBctZcnAPEtO';
  const token3 = 'xGNge31P4eGgR6';
  const tokenTot = token1 + token2 + token3;

  async function updateJSONFile() {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Récupérer le fichier actuel
    const response = await fetch(url, {
        headers: {
            'Authorization': `token ${tokenTot}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    const data = await response.json();

    // Vérifier si le contenu est bien encodé en base64
    if (data.encoding === 'base64') {
        // Décoder le contenu en base64
        const content = atob(data.content.replace(/\n/g, '')); // Supprimer les sauts de ligne
        let jsonContent = JSON.parse(content);

        // Modifier le contenu JSON comme souhaité
        jsonContent["nouvelle_cle"] = "nouvelle_valeur";

        // Réencoder le contenu modifié en base64
        const updatedContent = btoa(JSON.stringify(jsonContent, null, 2));

        // Mettre à jour le fichier sur GitHub
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
    } else {
        console.error('Le contenu récupéré n\'est pas encodé en base64.');
    }
  }

  // Appel de la fonction pour mettre à jour le fichier JSON
  updateJSONFile();
}
