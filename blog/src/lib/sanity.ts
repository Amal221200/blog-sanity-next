import { createClient } from "next-sanity";

const projectId = '7pyg6j07';
const dataset = 'production';
const apiVersion = '2023-11-13';

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

