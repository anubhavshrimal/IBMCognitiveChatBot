import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: SignupComponent
    },
    {
        path: 'chat',
        component: ChatPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }