import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./pages/movies/movies.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {MovieDetailsComponent} from "./pages/movies/movie-details/movie-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'categories', component: CategoriesComponent}
]

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  }
)
export class AppRoutingModule {}
