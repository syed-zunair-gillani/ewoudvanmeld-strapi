import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageOurValue extends Struct.ComponentSchema {
  collectionName: 'components_about_page_our_values';
  info: {
    displayName: 'Our-Value';
  };
  attributes: {
    Feature: Schema.Attribute.Component<'shared.info-card', true>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface BrokersProduct extends Struct.ComponentSchema {
  collectionName: 'components_brokers_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    Info: Schema.Attribute.Text;
    Label: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface BrokersWhy extends Struct.ComponentSchema {
  collectionName: 'components_brokers_whies';
  info: {
    description: '';
    displayName: 'Why';
  };
  attributes: {
    label: Schema.Attribute.Text;
    List: Schema.Attribute.Component<'shared.list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageComponentsFounder extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_founders';
  info: {
    description: '';
    displayName: 'Founder';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Info: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    List: Schema.Attribute.Component<'home-page-components.founder-list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageComponentsFounderList extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_founder_lists';
  info: {
    displayName: 'Founder-List';
  };
  attributes: {
    Stats: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    Button_1_Link: Schema.Attribute.Text;
    Button_2_Link: Schema.Attribute.Text;
    Info: Schema.Attribute.Text;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageComponentsLandingSolution
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_landing_solutions';
  info: {
    displayName: 'Landing-solution';
  };
  attributes: {
    Info: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Title: Schema.Attribute.Text;
  };
}

export interface HomePageComponentsWhy extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_whies';
  info: {
    displayName: 'Why';
  };
  attributes: {
    Label: Schema.Attribute.Text;
    List_Items: Schema.Attribute.Component<'shared.list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface ProductListProductLists extends Struct.ComponentSchema {
  collectionName: 'components_product_list_product_lists';
  info: {
    displayName: 'Product Lists';
  };
  attributes: {
    Info: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_cards';
  info: {
    displayName: 'Info-Card';
  };
  attributes: {
    Button_Link: Schema.Attribute.Text;
    Info: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedLeftRight extends Struct.ComponentSchema {
  collectionName: 'components_shared_left_rights';
  info: {
    displayName: 'Left-Right';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'shared.link', true>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Info: Schema.Attribute.Text;
    Label: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.Text;
    Link: Schema.Attribute.Text;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Info: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_banners';
  info: {
    description: '';
    displayName: 'Page Banner';
  };
  attributes: {
    Background_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Button: Schema.Attribute.Component<'shared.link', false>;
    Caption: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedPropertyTypes extends Struct.ComponentSchema {
  collectionName: 'components_shared_property_types';
  info: {
    displayName: 'PropertyTypes';
  };
  attributes: {
    Items: Schema.Attribute.Text;
  };
}

export interface SharedTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_cards';
  info: {
    displayName: 'Team-card';
  };
  attributes: {
    About: Schema.Attribute.Text;
    Designation: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.our-value': AboutPageOurValue;
      'brokers.product': BrokersProduct;
      'brokers.why': BrokersWhy;
      'home-page-components.founder': HomePageComponentsFounder;
      'home-page-components.founder-list': HomePageComponentsFounderList;
      'home-page-components.hero': HomePageComponentsHero;
      'home-page-components.landing-solution': HomePageComponentsLandingSolution;
      'home-page-components.why': HomePageComponentsWhy;
      'product-list.product-lists': ProductListProductLists;
      'shared.info-card': SharedInfoCard;
      'shared.left-right': SharedLeftRight;
      'shared.link': SharedLink;
      'shared.list': SharedList;
      'shared.page-banner': SharedPageBanner;
      'shared.property-types': SharedPropertyTypes;
      'shared.team-card': SharedTeamCard;
    }
  }
}
