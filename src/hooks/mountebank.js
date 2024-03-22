import { axiosMounteBankStubs } from "../api/axios";

const MOUNTEBANK_REGISTER_URL = "/imposters/8885/stubs";


const stubsRegister = async (user, pwd) => {
    let response;
    try {
        response = await axiosMounteBankStubs.post(
            MOUNTEBANK_REGISTER_URL,
            JSON.stringify({
                index: 0,
                defaultResponse: {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*",
                        "Access-Control-Allow-Origin": "*",
                    },
                },
                stub: {
                    responses: [
                        {
                            is: {
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
                                    "Access-Control-Allow-Headers": "${ALLOW-HEADERS}",
                                },
                                statusCode: 200,
                                body: {
                                    username: user,
                                    pwd: pwd,
                                    roles: [5150, 2001, 1984],
                                    accessToken:
                                        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTczNTZjZi0yMjk1LTRmY2ItODg2OC0xYTQ3NmE0MDU3OGMiLCJhdXRoX3RpbWUiOjE3MDk1MzY2NjYsInNjb3BlcyI6WyJlbWFpbDp3cml0ZSIsInNwb3J0cyIsIm9wZW5pZCIsInNwb3J0c190cmFpbmluZ19kYXRhIiwiYWNjb3VudDpjb25uZWN0IiwiaWRlbnRpZmljYXRpb25zIiwicHJvZmlsZSIsImFjY291bnQ6Z2VuZGVyIiwib3BlbjpzcG9ydHMiLCJvcGVuOnNwb3J0c190cmFpbmluZ19kYXRhOndyaXRlIiwiYWNjb3VudDppZGVudGlmaWNhdGlvbl9kYXRhIiwiYWNjb3VudDppZGVudGlmaWNhdGlvbl9kYXRhOndyaXRlIiwiYWNjb3VudDplbWFpbCIsImNvbnRhY3RzIiwiY29udGFjdHM6d3JpdGUiLCJhY2NvdW50Om1vcnBob2xvZ3kiLCJlbWFpbCIsImNvbmRpdGlvbnMiLCJjb25kaXRpb25zOndyaXRlIl0sImlzcyI6Imh0dHBzOi8vYXBpLWV1LnByZXByb2QuZGVjYXRsb24ubmV0L2Nvbm5lY3QiLCJwZXJtaXNzaW9ucyI6IjEwMDUwNTA2MCIsImxvY2F0aW9uIjoiSU4iLCJleHAiOjE3MDk4MDk2MDAsImlhdCI6MTcwOTgwODcwMCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImRMd0lEbzlGdGtsNTd4ZWJvVlRhLVY5VGcxNCJ9.xgwgt0V8036YmLQD2aV0cUO10OZkm5S3Ig5T37TfYOjvv635V9qpZHJsQ1Jp6nqY",
                                },
                            },
                            _behaviors: {
                                copy: [
                                    {
                                        from: {
                                            headers: "Access-Control-Allow-Origin",
                                        },
                                        into: "${ALLOW-ORIGIN}",
                                        using: {
                                            method: "regex",
                                            selector: ".+",
                                        },
                                    },
                                    {
                                        from: {
                                            headers: "Access-Control-Allow-Headers",
                                        },
                                        into: "${ALLOW-ORIGIN}",
                                        using: {
                                            method: "regex",
                                            selector: ".+",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                    predicates: [
                        {
                            and: [
                                {
                                    matches: {
                                        method: "GET",
                                        path: "/creds",
                                    },
                                },
                                {
                                    deepEquals: {
                                        query: {
                                            username: user,
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            }),
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        console.log(response.data)
    } catch (err) {
        console.error(err);
    }
    return response;
};

export default stubsRegister;

