export function groupItems(objArr: any, property: string) {
      return objArr.reduce((acc: any, obj: any) => {
        let key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }