import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bs-intro', pathMatch: 'full' },

  // { path: 'bs-intro', loadChildren: './intro/intro.module#IntroPageModule' },
  // { path: 'bs-language', loadChildren: './i-becrux-side/Pages/language/language.module#LanguagePageModule' },
  // { path: 'bs-login', loadChildren: './i-becrux-side/Pages/login/login.module#LoginPageModule' },
  // { path: 'bs-my-account', loadChildren: './i-becrux-side/Pages/my-account/my-account.module#MyAccountPageModule' },
  // { path: 'bs-my-orders', loadChildren: './i-becrux-side/Pages/my-orders/my-orders.module#MyOrdersPageModule' },
  // { path: 'bs-news', loadChildren: './i-becrux-side/Pages/news/news.module#NewsPageModule' },
  // { path: 'bs-news-detail', loadChildren: './i-becrux-side/Pages/news-detail/news-detail.module#NewsDetailPageModule' },
  // { path: 'bs-news-list', loadChildren: './i-becrux-side/Pages/news-list/news-list.module#NewsListPageModule' },
  // { path: 'bs-notifications', loadChildren: './i-becrux-side/Pages/notifications/notifications.module#NotificationsPageModule' },
  // { path: 'bs-order', loadChildren: './i-becrux-side/Pages/order/order.module#OrderPageModule' },
  // { path: 'bs-order-detail', loadChildren: './i-becrux-side/Pages/order-detail/order-detail.module#OrderDetailPageModule' },
  // { path: 'bs-privacy-policy', loadChildren: './i-becrux-side/Pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  // { path: 'bs-product-detail', loadChildren: './i-becrux-side/Pages/product-detail/product-detail.module#ProductDetailPageModule' },
  // { path: 'bs-products', loadChildren: './i-becrux-side/Pages/products/products.module#ProductsPageModule' },
  // { path: 'bs-refund-policy', loadChildren: './i-becrux-side/Pages/refund-policy/refund-policy.module#RefundPolicyPageModule' },
  // { path: 'bs-reviews', loadChildren: './i-becrux-side/Pages/reviews/reviews.module#ReviewsPageModule' },
  // { path: 'bs-reward-points', loadChildren: './i-becrux-side/Pages/reward-points/reward-points.module#RewardPointsPageModule' },
  // { path: 'bs-scratch-card', loadChildren: './i-becrux-side/Pages/scratch-card/scratch-card.module#ScratchCardPageModule' },
  // { path: 'bs-search', loadChildren: './i-becrux-side/Pages/search/search.module#SearchPageModule' },
  // { path: 'bs-select-country', loadChildren: './i-becrux-side/Pages/select-country/select-country.module#SelectCountryPageModule' },
  // { path: 'bs-select-zones', loadChildren: './i-becrux-side/Pages/select-zones/select-zones.module#SelectZonesPageModule' },
  // { path: 'bs-settings', loadChildren: './i-becrux-side/Pages/settings/settings.module#SettingsPageModule' },
  // { path: 'bs-shipping-method', loadChildren: './i-becrux-side/Pages/shipping-method/shipping-method.module#ShippingMethodPageModule' },
  // { path: 'bs-sign-up', loadChildren: './i-becrux-side/Pages/sign-up/sign-up.module#SignUpPageModule' },
  // { path: 'bs-store', loadChildren: './i-becrux-side/Pages/store/store.module#StorePageModule' },
  // { path: 'bs-term-services', loadChildren: './i-becrux-side/Pages/term-services/term-services.module#TermServicesPageModule' },
  // { path: 'bs-thank-you', loadChildren: './i-becrux-side/Pages/thank-you/thank-you.module#ThankYouPageModule' },
  // { path: 'bs-wish-list', loadChildren: './i-becrux-side/Pages/wish-list/wish-list.module#WishListPageModule' },
  // { path: 'bs-addresses', loadChildren: './i-becrux-side/Pages/address-pages/addresses/addresses.module#AddressesPageModule' },
  // { path: 'bs-billing-address', loadChildren: './i-becrux-side/Pages/address-pages/billing-address/billing-address.module#BillingAddressPageModule' },
  // { path: 'bs-shipping-address', loadChildren: './i-becrux-side/Pages/address-pages/shipping-address/shipping-address.module#ShippingAddressPageModule' },
  // { path: 'bs-categories', loadChildren: './i-becrux-side/Pages/categorie-pages/categories/categories.module#CategoriesPageModule' },
  // { path: 'bs-categories2', loadChildren: './i-becrux-side/Pages/categorie-pages/categories2/categories2.module#Categories2PageModule' },
  // { path: 'bs-categories3', loadChildren: './i-becrux-side/Pages/categorie-pages/categories3/categories3.module#Categories3PageModule' },
  // { path: 'bs-categories4', loadChildren: './i-becrux-side/Pages/categorie-pages/categories4/categories4.module#Categories4PageModule' },
  // { path: 'bs-categories5', loadChildren: './i-becrux-side/Pages/categorie-pages/categories5/categories5.module#Categories5PageModule' },
  // { path: 'bs-categories6', loadChildren: './i-becrux-side/Pages/categorie-pages/categories6/categories6.module#Categories6PageModule' },
  // { path: 'bs-sub-categories', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories/sub-categories.module#SubCategoriesPageModule' },
  // { path: 'bs-sub-categories2', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories2/sub-categories2.module#SubCategories2PageModule' },
  // { path: 'bs-sub-categories3', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories3/sub-categories3.module#SubCategories3PageModule' },
  // { path: 'bs-sub-categories4', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories4/sub-categories4.module#SubCategories4PageModule' },
  // { path: 'bs-sub-categories5', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories5/sub-categories5.module#SubCategories5PageModule' },
  // { path: 'bs-sub-categories6', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories6/sub-categories6.module#SubCategories6PageModule' },
  { path: 'bs-home', loadChildren: './i-becrux-side/Pages/home-pages/home/home.module#HomePageModule' },
  // { path: 'bs-home2', loadChildren: './i-becrux-side/Pages/home-pages/home2/home2.module#Home2PageModule' },
  // { path: 'bs-home3', loadChildren: './i-becrux-side/Pages/home-pages/home3/home3.module#Home3PageModule' },
  // { path: 'bs-home4', loadChildren: './i-becrux-side/Pages/home-pages/home4/home4.module#Home4PageModule' },
  // { path: 'bs-home5', loadChildren: './i-becrux-side/Pages/home-pages/home5/home5.module#Home5PageModule' },
  // { path: 'bs-home6', loadChildren: './i-becrux-side/Pages/home-pages/home6/home6.module#Home6PageModule' },
  // { path: 'bs-home7', loadChildren: './i-becrux-side/Pages/home-pages/home7/home7.module#Home7PageModule' },
  // { path: 'bs-home8', loadChildren: './i-becrux-side/Pages/home-pages/home8/home8.module#Home8PageModule' },
  // { path: 'bs-home9', loadChildren: './i-becrux-side/Pages/home-pages/home9/home9.module#Home9PageModule' },
  // { path: 'bs-home10', loadChildren: './i-becrux-side/Pages/home-pages/home10/home10.module#Home10PageModule' },
  // { path: 'bs-color-theme', loadChildren: './i-becrux-side/Pages/color-theme/color-theme.module#ColorThemePageModule' },
  // {
  //   path: 'intro',
  //   loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
