import { avatars } from "libs/avatars";
import { use42 } from "libs/fetch";
import { useRouter } from "next/router";
import React from 'react';

interface Profile {
	id: number,
	login: string,
	first_name: string,
	last_name: string
}

interface Project {
	name: string
	grade: number
}

// function _Progress(props: {
// 	width: number,
// 	percent: number
// }) {
// 	const { percent, width } = props
// 	const progress = (percent / 100) * width;

// 	const [value, setValue] = React.useState(0);

//   React.useEffect(() => {
//     setValue(percent * width);
//   });

// 	return (
// 		<div className={`progress-div` } style={{ width: progress }}>
// 			<div className={`progress`} style={{ width: progress }}/>
// 		</div>
// 	)
// }

function _Header(props: {
	profile: Profile
}) {
	const { profile } = props

	return <header className="border border-contrast rounded-xl p-6">
		<div className="flex items-center justify-center"> 
			<img className="block w-28 h-28 rounded-full mr-4"
				src={avatars[profile.login]} />
			<div className= "">
				<div className="text-lg text-black">{profile.login}</div>
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
	project: Project
}) {
	const { project } = props

	return <>
		<div>
			{project.name}
			{project.grade}
		</div>
	</>
}

function _Projects(props: {
	profile: Profile
}) {
	// ...

	return <>
	
	<ol className="relative border-l mt-6 border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-10">            
        <span className="flex absolute -left-2 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">Minishell <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
				<time className="block mb-2 text-m font-normal leading-none text-gray-400 dark:text-gray-500">Grade : 115</time>
				<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Validated on January 13th, 2022</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As beautiful as shell.</p>
				<p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Vpiamias:</p>
        <p className="mb-4 text-base font-m text-gray-500 dark:text-gray-400">Le projet répond au sujet et les améliorations spontanées témoignent
d'une compréhension poussée du fonctionnement du shell, notamment
l'implémentation du '!$' qui était vraiment inattendue."</p>
    </li>

		
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-2 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Philosophers</h3>
				<time className="block mb-2 text-m font-normal leading-none text-gray-400 dark:text-gray-500">Grade : 100</time>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Validated on December 7th, 2021</time>
				<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I never thought philosophy would be so deadly.</p>
				<p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Brmasser:</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bravo pour les bonus, peu de stud s'y penchent comme l'utilisation des
semaphores et des mutex sont aujourd'hui obsolètes au profit des
variables atomiques donc beau challenge, parfaitement mené !"</p>
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-2 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Ft_containers</h3>
				<time className="block mb-2 text-m font-normal leading-none text-gray-400 dark:text-gray-500">Grade : 100</time>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Validated in 2021</time>
				<p className="text-base font-normal text-gray-500 dark:text-gray-400">C++ containers, easy mode.                         
				 </p>
				<p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Abfall:</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bravo pour les bonus, peu de stud s'y penchent comme l'utilisation des
semaphores et des mutex sont aujourd'hui obsolètes au profit des
variables atomiques donc beau challenge, parfaitement mené !"</p>
    </li>
</ol>
	<div className="border border-contrast rounded-xl mb-2 text-center space-y-2 object-scale-down">


		{/* <_Project project={{name: "minishell", grade: 100}} />
		<_Project project={{name: "philo", grade: 100}} /> */}


	</div>
	
	</>
}



function _Page(props: {
	login: string
}) {
	const { login } = props

	const	users = use42<Profile[]>(`/v2/users?filter[login]=${login}`)
	const profile = users?.[0]

	if (!profile)
		return <>Loading...</>

	return <>
		<_Header profile={profile} />
		<_Projects profile={profile} />

	</>
}

export default function Profile() {
  const router = useRouter()
	const { login } = router.query
	
	if (typeof login !== "string")
		return null
	return <_Page login={login} />
}