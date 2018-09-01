import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CollectionComponent } from './collection/collection.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { DeitComponent } from './deit/deit.component';


const routes: Routes = [
	{ path: 'list', component: ListComponent },
	{ path: 'collection', component: CollectionComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'deit', component: DeitComponent },
	{ path: 'detail', component: DetailComponent },
	{
		path: '', redirectTo: '/list;title=所有联系人', pathMatch
			: 'full'
	},
	{ path: '**', component: ListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
