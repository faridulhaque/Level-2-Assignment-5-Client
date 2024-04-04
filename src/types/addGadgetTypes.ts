
export interface TGadget {
    name: string;
    price: number;
    quantity: number;
    releaseYear?: number;
    brand?: string;
    category?: string;
    model?: string;
    os?: string;
    connectivity?: string;
    powerSource?: string;
    features?: TGadgetFeatures;
    others?: TGadgetOthers;
  }
  
 export type TGadgetFeatures = {
    camera?: string;
    storage?: string;
    screenSize?: number;
  };
  
 export type TGadgetOthers = {
    weight?: number;
    dimensions?: string;
  };
  