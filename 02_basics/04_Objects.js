const user = {
    email: "adv@abc.com",
    fullname: {
        userFullName:{
            firstName: "Advait",
            lastName: "Tare"
        }
    }
}

// console.log(user);
// console.log(user.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} {target, source}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// destructuring
const course = {
    coursename: "js",
    price: 999,
    teacher: "hitesh"
}

const {teacher: haha} = course
console.log(haha);