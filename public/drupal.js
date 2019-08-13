/**
 * this file simulates an external
 * JS file supplied by something else other than
 * the react ecosystem.
 */

 // Define a new function.
(function () {
    var Drupal = {};
    Drupal.behaviors = {};
    window.drupal = Drupal;

    // Drupal.behaviors
    Drupal.behaviors.component = {
        expoint: '',
        subjects: window.messageBus.subjects,
        subscriptions: function () {
            this.expointSubscription = this.subjects['expoint'].asObservable().subscribe(
                (x) => {
                  if (this.expoint !== x) {
                    this.expoint = x;
                    this.updateExpoint();
                    console.log(x)
                  }
                });
        },
        render: function () {
            var target = document.getElementById('drupal');
            var drupalApp = document.createElement('p');
            drupalApp.innerHTML = '<p>Drupal App loaded.<span id="expoint"></span></p>';
            target.appendChild(drupalApp);
            //console.log(this.expoint);
        },
        updateExpoint: function () {
            var target = document.getElementById('expoint');
            var drupalApp = document.createElement('span');
            drupalApp.innerHTML = this.expoint;
            target.appendChild(drupalApp);
            console.log(this.expoint);
        },
        attach: function () {
            this.subscriptions();
            this.render();
        }
    };

    window.addEventListener('load', (event) => {
        window.drupal.behaviors.component.attach();
    });

    console.log('Drupal.js initialisation');
}());
