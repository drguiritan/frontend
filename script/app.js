

Alpine.store("settings", {
    apiBaseUrl:"https://172.26.253.11:4444/default/api",  
    appName: "contact application",  
   
});

Alpine.store("GlobalVariable", {
    //contacts:Alpine.reactive([]),
    contacts:Alpine.reactive({ 
        data: [], 
        total: 0,         
    }),
    queryParams: Alpine.reactive({}), // Keep query parameters reactive
});

Alpine.store("GlobalFunctions", { 
    findContactById(id) {        
        let contacts = Alpine.store("GlobalVariable").contacts.data; // Ensure `data` is always an array
        let foundContact = contacts.find(c => Number(c.id) === Number(id));
        
        if (foundContact) {
            return {...foundContact }; // Creates a new object to trigger reactivity
        } else {
            return {}; // Returns an empty object if not found
        }
        
    }
});



