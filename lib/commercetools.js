/* eslint-disable no-undef */
// lib/commercetools.js
import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { createRequestBuilder } from '@commercetools/api-request-builder';
import dotenv from 'dotenv';

dotenv.config();

const projectKey = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY;
const clientId = process.env.CTP_CLIENT_ID;
const clientSecret = process.env.CTP_CLIENT_SECRET;
const authUrl = process.env.NEXT_PUBLIC_CTP_AUTH_URL;
const apiUrl = process.env.NEXT_PUBLIC_CTP_API_URL;

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: authUrl,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
});

const httpMiddleware = createHttpMiddleware({
  host: apiUrl,
});

const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
});

const requestBuilder = createRequestBuilder({ projectKey });

export const apiClient = {
  client,
  requestBuilder,
};