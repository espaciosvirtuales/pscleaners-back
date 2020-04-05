const isTokenValid = async function (context) {

    if (context.params.provider) {

        const { token } = context.params.headers ? context.params.headers : { token: 0 }


        // console.log(token);

        const tokens = await context.app.service('tokens').find({
            query: {
                token: token || ""
            }
        })


        // console.log(tokens);



        if (tokens.total > 0) {
            return context
        } else {


            context.result = {
                status: 403,
                message: 'sorry but yor auth not ok'
            }

            throw new Error('Token not provided by client')

        }

    }


    return context
}

module.exports.isTokenValid = isTokenValid;