import { avatars } from "libs/avatars";
import { jsonfetch, use42, useGET } from "libs/fetch";
import { useRouter } from "next/router";
import React from 'react';

interface Profile {
	id: number,
	login: string,
	first_name: string,
	last_name: string
}

interface Project {
	project: string
	grade: number
	comments: Comment[]
}

interface Comment {
	login: string
	comment: string
}

const descriptions: Record<string, string> = {
	"minishell": "As beautiful as shell.",
	"philosophers": "I never thought philosophy would be so deadly.",
	"ft_containers": "C++ containers, easy mode.",
	"Inception": "This project aims to broaden your knowledge of system administration by using Docker."
}

function _Header(props: {
	profile: Profile
}) {
	const { profile } = props

	return <header className="border border-contrast rounded-xl p-6">
		<div className="flex items-center justify-center"> 
			<img className="block w-28 h-28 rounded-full mr-4"
				src={avatars[profile.login]} />
			<div className= "">
				<div className="text-lg text-black">
					{profile.login}
				</div>
				<div className="text-contrast text-black font-sans font-bold text-2xl">
					{profile.first_name} {profile.last_name}				
				</div>
				<div className="w-[400px] bg-contrast rounded-full dark:bg-gray-700 relative">
					<div className="text-xs font-medium bg-blue-500 text-white text-center p-1 leading-none rounded-full w-[200px]">45%</div>
				</div>
				<div className="flex items-center mt-2">
					<a className="block hover:bg-neutral-200 p-2 rounded-full font-medium focus:ring-blue-700 focus:text-blue-700 dark:text-white dark:focus:ring-blue-500 dark:focus:text-white"
						href="https://www.linkedin.com/in/lucie-khamlach/" target="_blank" rel="noreferrer">
						<svg
						className="w-6 h-6 text-blue-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"> 
							<path	d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
						</svg>
					</a> 
					<a className="block hover:bg-neutral-200 p-2 rounded-full font-medium focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:text-white  dark:focus:ring-blue-500 dark:focus:text-white"
						href="https://github.com/blessedNholyflavored/" target="_blank" rel="noreferrer">
						<svg
						className="w-6 h-6 text-blue-500 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path	d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</header>
}

function _Project(props: {
	hash: string
}) {
	const { hash } = props

	const project = useGET<Project>(`https://ipfs.io/ipfs/${hash}`, jsonfetch)

	if (!project)
		return null
	return <>
		<div className="relative ml-2 p-4 border-l border-contrast">
			<span className="absolute -translate-y-6 -translate-x-7 w-6 h-6 flex justify-center items-center bg-blue-100 rounded-full">
				<svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
				</svg>
			</span>
			<div className="flex items-center">
				<h3 className="inline text-xl font-bold mr-2">
					{project.project}
				</h3>
				<span className="py-1 px-2 bg-green-500 rounded-full text-sm text-contrast">
					{project.grade}/100
				</span>
			</div>
			<div className="text-contrast">
				{descriptions[project.project]}
			</div>
			<div className="my-2" />
			{project.comments?.map(comment => <>
				<div>
					<span className="font-medium mr-2">
						{comment.login}:
					</span>
					<span className="text-contrast">
						{comment.comment}
					</span>
				</div>
			</>)}
		</div>
	</>
}

function _Projects(props: {
	profile: Profile
}) {
	return <>
			<_Project hash="QmVBkgm3jzV8Pi8nT4wt5A75r7T2qc51ZSYnWheWnRurDo"/>
			<_Project hash="QmZRu154P1daj7PGhzffDSL3pa1knkry1zqFAn1nhf5n6A"/>
			<_Project hash="QmQ1XpN8TW89pDD4pfWxXLktSyQyzZtnF8197d8BEv6mAf" />
			<_Project hash="QmY4qxZ7tvozGCgU4yLhTt8NpbAg21RkSX6Sjkmji9r8a9" />
	</>
}

function _Page(props: {
	login: string
}) {
	const { login } = props

	const	users = use42<Profile[]>(`/v2/users?filter[login]=${login}`)
	const profile = users?.[0]

	if (!profile)
		return <>Chargement...</>
	return <>
		<_Header profile={profile} />
		<div className="my-8" />
		<_Projects profile={profile} />
		<div className="my-8"/>
	</>
}

export default function Profile() {
  const router = useRouter()
	const { login } = router.query
	
	if (typeof login !== "string")
		return null
	return <_Page login={login} />
}