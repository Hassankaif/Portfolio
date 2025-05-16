"use client"

import { useState } from "react"
import { Briefcase, Calendar, Award, ChevronRight, ChevronLeft } from "lucide-react"
import internships from "../utils/database"

const InternshipCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === internships.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? internships.length - 1 : prev - 1))
  }

  const goToIndex = (index) => {
    setCurrentIndex(index)
  }

  const current = internships[currentIndex]

  const getCompanyColors = (company) => {
    const hash = company.split("").reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)

    const colorOptions = [
      { bg: "bg-amber-200/80", border: "border-amber-300/50", text: "text-amber-600" },
      { bg: "bg-rose-200/80", border: "border-rose-300/50", text: "text-rose-600" },
      { bg: "bg-purple-200/80", border: "border-purple-300/50", text: "text-purple-600" },
      { bg: "bg-emerald-200/80", border: "border-emerald-300/50", text: "text-emerald-600" },
      { bg: "bg-teal-200/80", border: "border-teal-300/50", text: "text-teal-600" },
      { bg: "bg-green-200/80", border: "border-green-300/50", text: "text-green-600" },
      { bg: "bg-orange-200/80", border: "border-orange-300/50", text: "text-orange-600" },
    ]

    const colorIndex = Math.abs(hash) % colorOptions.length
    return colorOptions[colorIndex]
  }

  const colors = getCompanyColors(current.company)

  return (
    <section className="bg-gradient-to-br from-emerald-200 via-white to-pink-300 pt-8 sm:pt-12 px-2 sm:px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-12 px-2 sm:px-0">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Professional Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-100 p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">Internship Experience</h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={goToPrev}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-200"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                  {currentIndex + 1} / {internships.length}
                </span>
                <button onClick={goToNext} className="p-1.5 sm:p-2 rounded-full hover:bg-gray-200" aria-label="Next">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="p-3 sm:p-6">
              <div className="backdrop-blur-md bg-white/70 rounded-lg border border-white/50 shadow-md p-3 sm:p-5">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="flex flex-row md:flex-col items-center md:items-start">
                    {current.image && (
                      <img
                        src={current.image || "/placeholder.svg"}
                        alt={`${current.company} logo`}
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded shadow-sm"
                      />
                    )}
                    <div className="w-full h-px md:w-px md:h-full bg-gray-200 mx-3 my-auto md:mx-auto md:my-3 block"></div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{current.role}</h3>
                      <div className="flex items-center mt-1 gap-2 sm:gap-3">
                        <span className={`inline-flex items-center text-sm sm:text-base font-medium ${colors.text}`}>
                          {current.company}
                        </span>
                      </div>
                    </div>

                    {current.certificate && (
                      <div className="mt-4 sm:mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
                        {/* Left Column: Key Skills */}
                        <div>
                          <div className="text-lg sm:text-xl font-semibold text-black mb-2">Key Skills</div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {current.skills.map((skill, index) => (
                              <span
                                key={index}
                                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium ${colors.text} bg-opacity-10 ${colors.bg} border ${colors.border}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Duration */}
                          <div className="flex flex-col gap-3 sm:gap-4 mt-3 sm:mt-4">
                            <div className="bg-gray-50/70 rounded-lg p-2 sm:p-3 border border-gray-100 min-w-[60px]">
                              <span className="text-xs text-gray-500 mb-0.5 sm:mb-1">Duration: </span>
                              <span className="text-xs sm:text-sm font-medium text-gray-800"> {current.duration}</span>
                            </div>
                          </div>

                          {/* Timeline */}
                          <div className="flex flex-col bg-gray-50/70 rounded-lg p-2 sm:p-3 border border-gray-100 flex-1 mt-3">
                            <span className="text-xs text-gray-500 mb-0.5 sm:mb-1">Timeline</span>
                            <div className="flex items-center text-xs sm:text-sm font-medium text-gray-800">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-500" />
                              <span>
                                {current.start} — {current.end}
                              </span>
                            </div>
                          </div>

                          {/* Certificate Badge */}
                          <div className="mt-3 sm:mt-4">
                            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-green-100/70 backdrop-blur-sm text-green-800 border border-green-200/50 shadow-sm">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                              Certificate
                            </span>
                          </div>
                        </div>

                        {/* Right Column: Certificate Image */}
                        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                          <img
                            src={current.certificate || "/placeholder.svg"}
                            alt="Certificate"
                            className="rounded-lg border border-gray-200 shadow-md w-full max-w-[250px] md:max-w-sm object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternshipCard
