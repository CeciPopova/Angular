import { ValidatorFn } from "@angular/forms";


export function appEmailValidator(domains: string[]): ValidatorFn {
    const  domainString = domains.join('|') // ['bg','com'] => bg|com
    const regEx = new RegExp(`[^@]{6,}@gmail\.(${domainString})$`);


    return (control) => {
        return control.value === '' || regEx.test(control.value) ? null : { appEmailValidator: true};
    };
}