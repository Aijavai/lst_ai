import axios from "./config";
import { create } from 'zustand'

export const getRepos = async (owner, repo) => 
    await axios.get(`/repos/${owner}/${repo}`)

export const getRepoList = async (owner) => 
    await axios.get(`/users/${owner}/repos`)