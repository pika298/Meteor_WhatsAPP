import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chat } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {	
	constructor() {
		super(...arguments);

		this.helpers({
			cata() {
				return Chats.find();
			}
		});
	}

	remove(chat) {
		Chats.remove(chat._id);
	}
}

ChatsCtrl.$name = 'ChatsCtrl';