import { Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review';
<<<<<<< HEAD
import { NavSystem } from './nav-system/nav-system';

=======
import { ReviewSystem } from './review-system/review-system';
>>>>>>> luke

export const routes: Routes = [
    { 
        path: '', 
        component: NavSystem 
    },
    { 
        path: 'product-review/:id', 
        component: ProductReviewComponent
    },
    { 
        path: 'review-system', 
        component: ReviewSystem
    }
];
