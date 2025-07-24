import { useRepoStore } from '../../store/repos'
import { useEffect } from 'react'
import { getRepoList } from '../../api/repo'
import { create } from 'zustand'

const RepoList = () => {
    const {
        repos,
        loading,
        error,
        fetchRepos
    } = useRepoStore()
    useEffect(() => {
        fetchRepos()
    }, [])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                        <p>{repo.description || 'No description'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoList
