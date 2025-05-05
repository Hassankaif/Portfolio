"use client"

import { useState } from "react"
import { Briefcase, Calendar, Award, ChevronRight, ChevronLeft, Building } from "lucide-react"
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
    <section className="bg-gradient-to-br from-emerald-200 via-white to-pink-300 pt-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-gray-700" />
          <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-100 p-4">
              <h3 className="text-lg font-semibold text-gray-800">Internship Experience</h3>
              <div className="flex items-center gap-2">
                <button onClick={goToPrev} className="p-2 rounded-full hover:bg-gray-200" aria-label="Previous">
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <span className="text-sm text-gray-600 font-medium">
                  {currentIndex + 1} / {internships.length}
                </span>
                <button onClick={goToNext} className="p-2 rounded-full hover:bg-gray-200" aria-label="Next">
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="backdrop-blur-md bg-white/70 rounded-lg border border-white/50 shadow-md p-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center md:items-start">
                    <div className={`${colors.bg} p-4 rounded-full border ${colors.border}`}>
                      <Building className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="w-px h-full bg-gray-200 mx-auto my-3 hidden md:block"></div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{current.role}</h3>
                      <div className="flex items-center mt-1 gap-3">
                        <span className={`inline-flex items-center text-base font-medium ${colors.text}`}>
                          {current.company}
                        </span>
                        {current.image && (
                          <img
                            src={current.image}
                            alt={`${current.company} logo`}
                            className="w-10 h-10 object-contain rounded shadow-sm"
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex flex-col bg-gray-50/70 rounded-lg p-3 border border-gray-100 min-w-[140px]">
                        <span className="text-xs text-gray-500 mb-1">Duration</span>
                        <span className="text-sm font-medium text-gray-800">{current.duration}</span>
                      </div>

                      <div className="flex flex-col bg-gray-50/70 rounded-lg p-3 border border-gray-100 flex-1">
                        <span className="text-xs text-gray-500 mb-1">Timeline</span>
                        <div className="flex items-center text-sm font-medium text-gray-800">
                          <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                          <span>{current.start} — {current.end}</span>
                        </div>
                      </div>
                    </div>
                    {current.certificate && (
  <div className="mt-5 grid md:grid-cols-2 gap-6 items-start">
    
    {/* Left Column: Key Skills */}
    <div>
      <div className="text-xl font-semibold text-black mb-2">Key Skills</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {current.skills.map((skill, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded-md text-xs font-medium ${colors.text} bg-opacity-10 ${colors.bg} border ${colors.border}`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Certificate Badge Moved Here */}
      <div className="mt-16">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100/70 backdrop-blur-sm text-green-800 border border-green-200/50 shadow-sm">
          <Award className="w-4 h-4" />
          Certificate
        </span>
      </div>
    </div>

    {/* Right Column: Certificate Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src={current.certificate}
        alt="Certificate"
        className="rounded-lg border border-gray-200 shadow-md w-full max-w-sm"
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
