function makeJuice(size) {
    // Inner function to add ingredients and display the message
    function addIngredients(ing1, ing2, ing3) {
        // Display the message on the DOM
        const message = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;

        // Add the message to the DOM
        const body = document.body; // Access the body of the document
        const paragraph = document.createElement('p'); // Create a new paragraph element
        paragraph.textContent = message; // Set the paragraph text
        body.appendChild(paragraph); // Append the paragraph to the DOM
    }

    // Call the inner function with 3 ingredients
    addIngredients("apple", "banana", "mango");
}

// Invoke the outer function in the global scope
makeJuice("medium");
