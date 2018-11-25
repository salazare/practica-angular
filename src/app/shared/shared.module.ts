import { NgModule } from '@angular/core';

// Componentes
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotpagefoundComponent,
    SidebarComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotpagefoundComponent,
    SidebarComponent
  ]
})
export class SharedModule {}
