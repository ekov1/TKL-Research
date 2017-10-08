const commandProcessorFunction = (commands) => {

    const createProcess = () => {
        let bookData = {
            title: $("#formCreateBook input[name=title]").val(),
            author: $("#formCreateBook input[name=author]").val(),
            category: $("#formCreateBook input[name=category]").val(),
            description: $("#formCreateBook textarea[name=descr]").val()
        };

        commands.createBook(bookData.title, bookData.author, bookData.category, bookData.description);
        $("#formCreateBook").trigger("reset");
    }

    const createRecipeProcess = () => {
        let recipeData = {
            title: $("#formCreateRecipe input[name=title]").val(),
            ingredients: $("#formCreateRecipe input[name=ingredients]").val(),
            directions: $("#formCreateRecipe textarea[name=directions]").val()
        };
        commands.createRecipe(recipeData.title, recipeData.ingredients, recipeData.directions);
        $("#formCreateBook").trigger("reset");
    }
    const createCommentProcess = () => {
        let commentData = {
            comment: $("#formCreateComment input[name=comment]").val(),
            username: $("#formCreateComment input[name=username]").val(),
        };

        commands.createComment(commentData.comment, commentData.username);
        $("#formCreateComment").trigger("reset");
    }
    const listBooksCommand = function() {
        commands.listBooks();
    }
    const listRecipesCommand = function() {
        commands.listRecipes();
    }

    return {
        x: console.log('commandProcessor'),
        createProcess: createProcess,
        createRecipeProcess: createRecipeProcess,
        createCommentProcess: createCommentProcess,
        listBooksCommand: listBooksCommand,
        listRecipesCommand: listRecipesCommand
    }
};