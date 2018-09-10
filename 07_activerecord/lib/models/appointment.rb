class Appointment < ActiveRecord::Base
  belongs_to :doctor
  belongs_to :patient

  # def doctor
  #   Doctor.find(self.doctor_id)
  # end
  #
  # def patient
  #   Patient.find(self.patient_id)
  # end
end
