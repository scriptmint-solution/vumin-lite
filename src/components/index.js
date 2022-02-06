
import GuestHeader from '@layouts/Partials/GuestHeader.vue'
import AppSidebar from '@layouts/Partials/AppSidebar.vue'
import AppHeader from '@layouts/Partials/AppHeader.vue'
import AppNavigation from '@layouts/Partials/AppNavigation.vue'
import MobileSidebar from '@layouts/Partials/MobileSidebar.vue'
import ProfileDropdown from '@layouts/Partials/ProfileDropdown.vue'
import PageHeader from '@layouts/Partials/PageHeader.vue'

import BaseCard from '@components/Ui/BaseCard.vue'

import BaseInput from '@components/Form/BaseInput.vue'
import BaseCheckbox from '@components/Form/BaseCheckbox.vue'
import BaseLabel from '@components/Form/BaseLabel.vue'
import BaseButton from '@components/Form/BaseButton.vue'
import BaseLink from '@components/Form/BaseLink.vue'
import FormError from '@components/Form/FormError.vue'

import ParentTransition from '@layouts/Transitions/ParentTransition.vue'
import ChildTransition from '@layouts/Transitions/ChildTransition.vue'

export default app => {
  app.component('GuestHeader', GuestHeader)
  app.component('AppSidebar', AppSidebar)
  app.component('AppHeader', AppHeader)
  app.component('AppNavigation', AppNavigation)
  app.component('MobileSidebar', MobileSidebar)
  app.component('ProfileDropdown', ProfileDropdown)
  app.component('PageHeader', PageHeader)

  app.component('BaseCard', BaseCard)

  app.component('BaseInput', BaseInput)
  app.component('BaseCheckbox', BaseCheckbox)
  app.component('BaseLabel', BaseLabel)
  app.component('BaseButton', BaseButton)
  app.component('BaseLink', BaseLink)
  app.component('FormError', FormError)

  app.component('ParentTransition', ParentTransition)
  app.component('ChildTransition', ChildTransition)
}
