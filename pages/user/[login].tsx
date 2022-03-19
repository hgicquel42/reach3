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

function _Progress(props: {
	width: number,
	percent: number
}) {
	const { percent, width } = props
	const progress = (percent / 100) * width;

	const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent * width);
  });

	return (
		<div className={`progress-div`} style={{ width: progress }}>
			<div className={`progress`} style={{ width: progress }}/>
		</div>
	)
}

function _Header(props: {
	profile: Profile
}) {
	const { profile } = props

	return <header className="flex border border-contrast rounded-xl  mb-2">
		<div className="p-4 flex grow">
			<img className="w-28 h-28 rounded-full mx-8"
				src={avatars[profile.login]} />
			
				<div className= " py-8 ">
				<div className="text-center text-lg text-black">{profile.login}</div>
				<div className="text-contrast text-black font-sans font-bold text-2xl text-center">
					{profile.first_name} {profile.last_name}				

					<_Progress width={200} percent={42} />

					<div className=" rounded-md inline-block align-middle mb-10" role="group">
						<button type="button" className="py-2 px-4 absolute right-12 w-32 font-medium focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:text-white  dark:focus:ring-blue-500 dark:focus:text-white">
						<svg
						className="w-6 h-6 text-blue-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512">
								<path
									d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
								></path>
						</svg>
					</button>
					<button type="button" className="py-2 px-4 absolute  right-0 w-32  font-medium focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  dark:text-white  dark:focus:ring-blue-500 dark:focus:text-white">
					<svg
					className="w-6 h-6 text-blue-500 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path
						d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>
					</svg>
					</button>
				</div>
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
		</div>
	</>
}

function _Projects(props: {
	profile: Profile
}) {
	// ...

	return <>
	<ol className="relative border-l border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-6">            
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">Minishell <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As beautiful as shell.</p>
        <a href="" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> NFT Link or smth</a>
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Philosophers</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">P_thread, mutex and data races to make your life brighter</p>
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Ft_containers</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Binary tree and a lot of coffee</p>
    </li>
</ol>
	<div className="border border-contrast rounded-xl mb-2 text-center space-y-2 object-scale-down">

		<_Project project={{name: "minishell", grade: 100}} />
		<_Project project={{name: "philo", grade: 100}} />


	</div>
	
	</>
}
function _Footer(props: {
	profile: Profile
}) {
	const { profile } = props

	return <h3 className="flex absolute font-bold text-sm dark:text-black">Powered by StartOn</h3>
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
		<_Footer profile={profile} />

	</>
}

export default function Profile() {
  const router = useRouter()
	const { login } = router.query
	
	if (typeof login !== "string")
		return null
	return <_Page login={login} />
}