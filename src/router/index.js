import VueRouter from "vue-router";
import RandomGenerator from '../views/RandomGenerator'
import MatrixPrimaryTransform from '../views/MatrixPrimaryTransform'

export default new VueRouter({
    routes: [
        {
            path: "/random-generator",
            component: RandomGenerator
        },
        {
            path: "/matrix-primary-transform",
            component: MatrixPrimaryTransform
        }
    ]
})