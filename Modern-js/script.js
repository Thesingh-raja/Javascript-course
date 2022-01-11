import cloneDeep  from './node_modules/lodash-es/cloneDeep.js'

const state = {
    objk: [{oh: 'obj1'}, {ok: 'obj2'}],
    objj: [{oh: 'obj1'}, {ok: 'obj2'}]
   
}
const stateClone= cloneDeep(state)
console.log(state,stateClone)
console.log(state,stateClone)

class Person
{
    #greeting='Hey'
    constructor(name)
    {
        this.name=name;
        console.log(`${this.#greeting},${this.name}`)
    }
}
const jonas =new Person('jonas')