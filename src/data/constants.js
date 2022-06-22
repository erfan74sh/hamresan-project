import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTableColumns,
	faSquarePollVertical,
	faClipboardList,
	faCalendarCheck,
	faGlobe,
	faPalette,
	faBox,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "../assets/profile.jpg";

export const sideBar = [
	{
		title: "analytics",
		items: [
			{
				icon: <FontAwesomeIcon icon={faTableColumns} />,
				title: "dashboard",
				url: "#",
			},
			{
				icon: <FontAwesomeIcon icon={faSquarePollVertical} />,
				title: "performance",
				url: "#",
			},
		],
	},
	{
		title: "content",
		items: [
			{
				icon: <FontAwesomeIcon icon={faClipboardList} />,
				title: "guide",
				url: "#",
			},
			{
				icon: <FontAwesomeIcon icon={faGlobe} />,
				title: "hotspot",
				url: "#",
			},
			{
				icon: <FontAwesomeIcon icon={faCalendarCheck} />,
				title: "checklist",
				url: "#",
			},
			{
				icon: <FontAwesomeIcon icon={faThumbsUp} />,
				title: "NPS",
				url: "#",
			},
		],
	},
	{
		title: "customization",
		items: [
			{
				icon: <FontAwesomeIcon icon={faBox} />,
				title: "segments",
				url: "#",
			},
			{
				icon: <FontAwesomeIcon icon={faPalette} />,
				title: "themes",
				url: "#",
			},
		],
	},
];

export const user = {
	name: "erfan",
	lastName: "shafiee",
	profilePic: ProfilePic,
	accountType: "Premium",
};
