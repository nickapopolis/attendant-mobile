export const MEDIA_TAB_CLICK = 'MEDIA_TAB_CLICK';
export function mediaTabClick (tab){
	return {
		type: MEDIA_TAB_CLICK,
		tab
	};
}