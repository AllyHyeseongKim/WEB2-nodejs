var members = ['Ally', 'Hyeseong', 'Kim'];
console.log(members[1]);    // Hyeseong
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer':'Ally',
    'designer' : 'Hyeseong',
    'manager' : 'Kim'
}
console.log(roles.designer);    // Hyeseong
console.log(roles['designer']);    // Hyeseong

for(var name in roles) {
    console.log('object => ', name, 'value => ', roles[name]);
}