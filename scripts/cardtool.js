function expandCard(name) {
    var card = document.querySelector('[name="' + name + '"]');
    var subtext = card.querySelector('[name="' + name + '-subtext"]');

    // get the previously expanded card
    var expandedCard = document.querySelector('.expanded');
    var expandedSubtext = null;
    if (expandedCard) {
        expandedSubtext = expandedCard.querySelector('[name="' + expandedCard.getAttribute('name') + '-subtext"]');
    }

    // feature: redirect user to session page onClick
    if (expandedCard === card && card.classList.contains('expanded')) {
        if (name == "statistics" || name == "advanced") {
            window.location.href = '/' + name + '.html';
        } else {
            window.location.href = '/session.html?mode=' + name;
        }
        return;
    }

    // collapse the previously expanded card, if any
    if (expandedCard && expandedCard !== card) {
        expandedCard.style.height = '';
        expandedSubtext.style.visibility = 'hidden';
        expandedCard.classList.remove('expanded');
    }

    // expand the clicked card
    if (card.classList.contains('expanded')) {
        card.style.height = '';
        subtext.style.visibility = 'hidden';
        card.classList.remove('expanded');
    } else {
        card.style.height = '10.5vh';
        setTimeout(function() {
            subtext.style.visibility = 'visible';
        }, 10);
        card.classList.add('expanded');
    }
}

// feature: collapse last card onclick
function collapseAll() {
    var expandedCard = document.querySelector('.expanded');
    var expandedSubtext = null;
    if (expandedCard) {
        expandedSubtext = expandedCard.querySelector('[name="' + expandedCard.getAttribute('name') + '-subtext"]');
    }
    expandedCard.style.height = '';
    expandedSubtext.style.visibility = 'hidden';
    expandedCard.classList.remove('expanded');
}