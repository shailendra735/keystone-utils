var demand = require('must'),
	utils = require('../index');

describe('String transform', function(){
	describe('Titlecase', function() {
		it('Should transform "one" to "One" ', function() {
			demand(utils.titlecase('one')).to.equal('One');
		});
		it('Should transform "one two" to "One Two"', function() {
			demand(utils.titlecase('one two')).to.equal('One Two');
		});
		it('Should transform "one Two three" to "One Two Three"', function() {
			demand(utils.titlecase('one Two three')).to.equal('One Two Three');
		});
	});


	describe('Key to label', function() {
		it('should transform "one" to "One"', function() {
			demand(utils.keyToLabel('one')).to.equal('One');
		});
		it('should transform "oneTwo" to "One Two" ', function() {
			demand(utils.keyToLabel('oneTwo')).to.equal('One Two');
		});
		it('should transform "one_two" to "One_two"', function() {
			demand(utils.keyToLabel('one_two')).to.equal('One_two');
		});
		it('should transform "oneTwoThree" to "One Two Three"', function() {
			demand(utils.keyToLabel('oneTwoThree')).to.equal('One Two Three');
		});
		it('should transform "oneTWOThree" to "One TWOThree"', function() {
			demand(utils.keyToLabel('oneTWOThree')).to.equal('One TWOThree');
		});
		it('should transform "one twoThree" to "One Two Three" ', function() {
			demand(utils.keyToLabel('one twoThree')).to.equal('One Two Three');
		});
		it('should transform "oneTwo.three" to "One Two Three"', function() {
			demand(utils.keyToLabel('oneTwo.three')).to.equal('One Two Three');
		});
		it('should transform "oneTwo3four" to "One Two 3 Four"', function() {
			demand(utils.keyToLabel('oneTwo3four')).to.equal('One Two 3 Four');
		});
		it('should transform "oneTwo-threeFour" to "One Two Three Four" ', function() {
			demand(utils.keyToLabel('oneTwo-threeFour')).to.equal('One Two Three Four');
		});
		it('should transform "id" to "Id"', function() {
			demand(utils.keyToLabel('id')).to.equal('Id');
		});
		it('should transform "someId" to "Some Id"', function() {
			demand(utils.keyToLabel('someId')).to.equal('Some Id');
		});
	});


	describe('Key to path', function() {
		it('should transform "faq" to "faq"', function() {
			demand(utils.keyToPath('faq')).to.equal('faq');
		});
		it('should transform "FAQs" to "faqs"', function() {
			demand(utils.keyToPath('FAQs')).to.equal('faqs');
		});
		it('should transform "theFAQs" to "the-faqs"', function() {
			demand(utils.keyToPath('theFAQs')).to.equal('the-faqs');
		});
		it('should transform "oneTwo" to "one-two"', function() {
			demand(utils.keyToPath('oneTwo')).to.equal('one-two');
		});
		it('should transform "One_two" to "one_two"', function() {
			demand(utils.keyToPath('One_two')).to.equal('one_two');
		});
		it('should transform "one2three" to "one-2-three"', function() {
			demand(utils.keyToPath('one2three')).to.equal('one-2-three');
		});
		it('should transform "id" to "id"', function() {
			demand(utils.keyToPath('id')).to.equal('id');
		});
		it('should transform "SomeId" to "some-id"', function() {
			demand(utils.keyToPath('SomeId')).to.equal('some-id');
		});
	});

	describe('Key to property', function() {
		it('should transform "faq" to "faq"', function() {
			demand(utils.keyToProperty('faq')).to.equal('faq');
		});
		it('should transform "FAQs" to "faqs"', function() {
			demand(utils.keyToProperty('FAQs')).to.equal('faqs');
		});
		it('should transform "theFAQs" to "theFaqs"', function() {
			demand(utils.keyToProperty('theFAQs')).to.equal('theFaqs');
		});
		it('should transform "oneTwo" to "oneTwo"', function() {
			demand(utils.keyToProperty('oneTwo')).to.equal('oneTwo');
		});
		it('should transform "One_two" to "one_two"', function() {
			demand(utils.keyToProperty('One_two')).to.equal('one_two');
		});
		it('should transform "one2three" to "one2Three"', function() {
			demand(utils.keyToProperty('one2three')).to.equal('one2Three');
		});
		it('should transform "id" to "id"', function() {
			demand(utils.keyToProperty('id')).to.equal('id');
		});
		it('should return "someId" for "SomeId"', function() {
			demand(utils.keyToProperty('SomeId')).to.equal('someId');
		});
	});

	describe('Escape String', function() {
		it('should properly escape the string The Koala\'s Sanctuary', function() {
			demand(utils.escapeString('The Koala\'s Sanctuary')).to.equal('The Koala\\\'s Sanctuary');
		});
		it('should properly escape the string "Koala"', function() {
			demand(utils.escapeString('"Koala"')).to.equal('\\"Koala\\"');
		});
		it('should properly escape the string "This \\ That"', function() {
			demand(utils.escapeString('This \\ That')).to.equal('This \\\\ That');
		});
	});

	describe('Diacritics', function() {
		it('should transform "ÁÂÃÄÅÇÈÉàáâãäåèéêëìíîïòóôõ" to "aaaaaceeaaaaaaeeeeiiiioooo"', function() {
			demand(utils.slug('ÁÂÃÄÅÇÈÉàáâãäåèéêëìíîïòóôõ')).to.equal('aaaaaceeaaaaaaeeeeiiiioooo');
		});
		it('should transform "çë Díaz Ü" to "ce-diaz-u"', function() {
			demand(utils.slug('çë Díaz Ü')).to.equal('ce-diaz-u');
		});
		it('should transform "çë Díaz Ü" to "ce-diaz-u"', function() {
			demand(utils.slug('çë Díaz Ü')).to.equal('ce-diaz-u');
		});
	});

	describe('Transliteration', function() {
		it('should transform "современном" to "sovremennom"', function() {
			demand(utils.slug('современном')).to.equal('sovremennom');
		});
		it('should transform "Балы, красавицы, лакеи, юнкера" to "baly-krasavytsy-lakey-iunkera"', function() {
			demand(utils.slug('Балы, красавицы, лакеи, юнкера')).to.equal('baly-krasavytsy-lakey-iunkera');
		});
		it('should transform "И вальсы Шуберта и хруст французской булки," to "y-valsy-shuberta-y-khrust-frantsuzskoi-bulky"', function() {
			demand(utils.slug('И вальсы Шуберта и хруст французской булки,')).to.equal('y-valsy-shuberta-y-khrust-frantsuzskoi-bulky');
		});
		it('should transform "Любовь, шампанское, закаты, переулки" to "liubov-shampanskoe-zakaty-pereulky"', function() {
			demand(utils.slug('Любовь, шампанское, закаты, переулки')).to.equal('liubov-shampanskoe-zakaty-pereulky');
		});
		it('should transform "Как упоительны в России вечера!" to "kak-upoytelny-v-rossyy-vechera"', function() {
			demand(utils.slug('Как упоительны в России вечера!')).to.equal('kak-upoytelny-v-rossyy-vechera');
		});
	});

	describe('Smart apostrophe', function() {
		it('should transform "The User’s Guide" to "the-users-guide"', function() {
			demand(utils.slug('The User’s Guide')).to.equal('the-users-guide');
		});
	});
});