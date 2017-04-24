import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SmartAudio } from '../../providers/smart-audio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = AboutPage;
	tab3Root = ContactPage;

	constructor(public smartAudio: SmartAudio) {

	}

	changeTab() {
		this.smartAudio.play('tabSwitch');
	}

}
