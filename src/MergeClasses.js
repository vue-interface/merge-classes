import isArray from "lodash.isarray";
import isObject from "lodash.isobject";

export default {

    methods: {

        mergeClasses(...args) {
            return args.reduce((carry, arg) => {
                if(isObject(arg)) {
                    Object.assign(carry, arg);
                }
                else if(isArray(arg)) {
                    carry = carry.concat(arg);
                }
                else if(arg) {
                    carry[arg] = true;
                }

                return carry;
            }, {});
        }

    }

};
