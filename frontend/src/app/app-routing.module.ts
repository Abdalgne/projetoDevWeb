import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importação dos componentes para conteúdo
import { HomeComponent } from "./views/home/home.component";
import { ProdutoComponent } from "./views/produto/produto.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "produto",
    component: ProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
