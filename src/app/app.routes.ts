import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProjetsComponent } from './projets/projets.component';
import { ArticlesComponent } from './articles/articles.component';
import { AngularComponent } from './articles/angular/angular.component';
import { ChoiceComponent } from './choice/choice.component';
import { UxComponent } from './articles/ux/ux.component';

export const routes: Routes = [
    {
        path: 'accueil',
        component: AcceuilComponent,
        title: 'Accueil'
    },

    {
        path: 'choice',
        component: ChoiceComponent,
        title: 'Accueil'
    },

    {
        path: 'apropos',
        component: AproposComponent,
        title: 'A propos'
    },
    {
        path: 'projets',
        component: ProjetsComponent,
        title: 'Projets'
    },
    {
        path: 'articles',
        children :[
            {
                path : '',
                component: ArticlesComponent,
                title: 'Articles',
        
            },
            {
                path: 'angular',
                component: AngularComponent,
                title: 'Angular'
            },   
            {
                path: 'ux',
                component: UxComponent,
                title: 'User Experience'
            },        
     
        ]
    },
    {path : '', redirectTo : '/accueil', pathMatch : 'full'}
];
