export async function fetchDataFrom(url) {

    try {
        let response = await fetch(url);
        
        if (!response.ok) { throw new Error('Error'); }
        let data = await response.json();
        
        return data;

    }
    catch (error) {
        return null;
    }
    
}