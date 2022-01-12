import * as model from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { MODAL_CLOSE_SEC } from './config.js';

// if (module.hot)
// {
//   module.hot.accept();
// }

const controlRecipes =async function(){
  try{
    const id =window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage())

    //updating bookmarks view
    bookmarksView.update(model.state.bookmarks)
    
    //loading recipe
    await model.loadRecipe(id);
    
    //rendering recipe
    recipeView.render(model.state.recipe);
}catch (err) {
  recipeView.renderError();
  console.error(err)
}
};

const controlSearchResults = async function(){
  try{
    resultsView.renderSpinner();
    //get search query
    const query = searchView.getQuery();
    if(!query) return;

    //load search results
await model.loadSearchResults(query)
//render search results
// resultsView.render(model.state.search.results)
resultsView.render(model.getSearchResultsPage(1))

//render initial pagination
paginationView.render(model.state.search)
  }catch (err){console.log(err)}
}
const controlPagination = function(goToPage){
  resultsView.render(model.getSearchResultsPage(goToPage))

//render new  pagination button
paginationView.render(model.state.search)

}
const controlServings= function(newServings)
{
  //update in state
  model.updateServings(newServings);
  //update in recipe view
recipeView.update(model.state.recipe);
// recipeView.update(model.state.recipe);
}

const controlAddBookmark = function(){
  //add or remove bookmark
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id);
  
 //update recipeview
  recipeView.update(model.state.recipe);

  //render bookmark
  bookmarksView.render(model.state.bookmarks)
}


const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function(newRecipe){
  try{ 
    //spinner
    addRecipeView.renderSpinner();

  //upload new recipe data
  await model.uploadRecipe(newRecipe);
  console.log(model.state.recipe);

  //render recipe
  recipeView.render(model.state.recipe);

  //success message
  addRecipeView.renderMessage();

  //render bookmark view
  bookmarksView.render(model.state.bookmarks);

  //change id in url
  window.history.pushState(null,'',`#${model.state.recipe.id}`);

  //close form window
setTimeout(function() {
  addRecipeView.toggleWindow();
},MODAL_CLOSE_SEC * 1000)
  }catch (err){
    console.error('💥',err);
    addRecipeView.renderError(err.message)
  }
};

const init =function(){
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  
};
 init(); 