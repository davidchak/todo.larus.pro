import { useAppDispatch, useAppSelector } from "..";
import { setActiveGroup, setActiveSection } from "./menu.reducer";


export default function useMenu() {
	const { activeGroup, activeSection } = useAppSelector(state => state.menu);
	const dispatch = useAppDispatch();

	const setActiveMenuGroup = (groupSlug: string) => {
		if (activeGroup !== groupSlug) {
			dispatch(setActiveGroup(groupSlug));
		}
	};

	const setActiveMenuSection = (sectionSlug: string) => {
		if (activeSection !== sectionSlug) {
			dispatch(setActiveSection(sectionSlug))
		}
	}

	return {
		activeMenuGroup: activeGroup,
		activeMenuSection: activeSection,
		setActiveMenuGroup,
		setActiveMenuSection
	}
}