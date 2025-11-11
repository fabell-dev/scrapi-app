import type { Schema, Struct } from '@strapi/strapi';

export interface SeasonCard extends Struct.ComponentSchema {
  collectionName: 'components_season_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SeasonCardchild extends Struct.ComponentSchema {
  collectionName: 'components_season_cardchildren';
  info: {
    displayName: 'cardchild';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'season.card': SeasonCard;
      'season.cardchild': SeasonCardchild;
    }
  }
}
