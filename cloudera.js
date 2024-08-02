const input = {
    a: 1,
    b: {
      c: 2,
      d: -3,
      e: {
        f: {
          g: -4,
        },
      },
      h: {
        i: 5,
        j: 6,
      },
    }
  };
  
  const callback = element => element >= 0;
  
  function customfilterArray(input, callback) {
    // filtering logic here
    let newOp = [];
    for (let i = 0; i <  input.length; i++) {
        if (callback[i]) {
            newOp.push(callback[i]);
        }
    }
    return newOp;
  }

  let newOp = {};
  function filter(input, parentKey, callback) {
    for (let key in input) {
        console.log('key parentKey', key, parentKey, input[key]);

        if (typeof(input[key]) !== 'object') {

            if (callback(input[key])) {
                  if (key === parentKey) {
                    newOp[key] = input[key];
                } else {
                if (newOp[parentKey]) {
                        newOp[parentKey][key] = input[key];
                } else {
                    newOp[parentKey] = {
                        [key]: input[key]
                    };  
                }  
            }            // if (key === parentKey) {
                //     newOp[key] = input[key];
                // } else {
                //     newOp[parentKey] = {[key]: input[key]};
                    // if (newOp[parentKey]) {

                    //     newOp[parentKey][key] = input[key];
                    // } else {
                    //     newOp[parentKey] = {
                    //         [key]: input[key]
                    //     };
                    //     console.log('parentKey', parentKey);

                    //     // console.log('newOp[parentKey]', key, parentKey, newOp);

                    // }
                   
                // }
            }
        } else {
            filter(input[key], [parentKey + key], callback)
        }
       
    }

    return newOp;
  }
  
  const filtered = filter(input, 'a', callback);
  
  // { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
  console.log(filtered, 'finalres ', JSON.stringify(filtered) === JSON.stringify({ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }));
