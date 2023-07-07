/*
 * Version: 1.0.0
 * Author: Pavan kalyan
 * Date: July 6, 2023
 * Description: This file contains JavaScript code that can be used to validate the HTTP method being used in your application or server.
 */
exports.run = async function (options) {
    const methods = options.allowed_method.toUpperCase().split(',');
    const requestMethod = this.req.method;
    if (!methods.includes(requestMethod)) {
        const http_accept = this.global.data.$_HEADER.accept;
        if(http_accept !== 'application/json'){
            return this.res.status(405).send()
        }
        return this.res.status(405).json({
            status: '405',
            message: 'Method not allowed'
        });
    };
}