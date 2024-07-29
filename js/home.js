    document.getElementById('searchButton').addEventListener('click', function() {
        // Get the selected values from the dropdowns
        const fromLocation = document.getElementById('fromLocation').value;
        const toLocation = document.getElementById('toLocation').value;

        // Redirect based on combinations
        if (fromLocation !== 'Pick Up Location' && toLocation !== 'Drop Location') {
            let url = '';

            if (fromLocation === 'locationA' && toLocation === 'locationB') {
                url = '../packages/price.html';
            } else if (fromLocation === 'locationC' && toLocation === 'locationD') {
                url = '../packages/locationC_D.html';
            } else if (fromLocation === 'locationE' && toLocation === 'locationF') {
                url = '../packages/locationE_F.html';
            } else {
                url = '../packages/price.html'; // Default page or handle other cases
            }

            window.location.href = url;
        } else {
            alert('Please select both from and to locations.');
        }
    });

