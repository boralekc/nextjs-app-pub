export interface ISection {
    id: number;
    attributes: {
        name: string;
        categories: {
                data: {
                    attributes: {
                      name: string;
                      slug: string;
                    }
                  }[]
            }
      };
    }
    
