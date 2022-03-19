import { useRouter } from "next/router"

function _Page(props: {
	login: string
}) {
	const { login } = props

	return (<>
		Page de profil de {login}
	</>)
}

export default function Profile() {
  const router = useRouter()
	const { login } = router.query
	
	if (typeof login !== "string")
		return null
	return <_Page login={login} />
}
