let month = prompt('Enter the month: ').toLowerCase();

if (month == 'september' || month == 'october' || month == 'november') {
	alert(`It's autumn`);
} else if (month == 'december' || month == 'january' || month == 'february') {
	alert(`It's winter`);
} else if (month == 'march' || month == 'april' || month == 'may') {
	alert(`It's spring`);
} else if (month == 'june' || month == 'july' || month == 'august') {
	alert(`It's summer`);
} else {
	alert('Enter a valid month!!!');
}

switch (true) {
	case month == 'september' || month == 'october' || month == 'november':
		alert(`It's autumn`);
		break;
	case month == 'december' || month == 'january' || month == 'february':
		alert(`It's winter`);
	case month == 'march' || month == 'april' || month == 'may':
		alert(`It's spring`);
		break;
	case month == 'june' || month == 'july' || month == 'august':
		alert(`It's summer`);
		break;
	default:
		alert('Enter a valid month!!!');
		break;
}
