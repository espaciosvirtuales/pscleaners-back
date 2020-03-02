const isTokenValid = async function(context){

    const {token} = context.params.headers 


    const tokens = await context.app.service('tokens').find({
        query: {
            token: token || ""
        }
    })

    

    if(tokens.total > 0){
        return context
    }else{
        
        context.result = {
            status : 403,
            message : 'sorry but yor auth not ok'
        }
    }

    return context
}

module.exports.isTokenValid = isTokenValid;