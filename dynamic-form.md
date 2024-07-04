## Section

    Project Information
        Form
            plan upload
                input
                    type: text
                    placeholder: give you a space name
                input
                    type: file [dropzone]
                input
                    type: checkbox
                    label: I dont have a floorplan for my project
            address
                input
                    type: text
                    placeholder: enter building address here
                    autosuggest: true
                input
                    type: checkbox
                    label: I dont have an address for my project
            space size & rentable area
                input
                    type: range
                    label: What is the approximate size of your new space?
                    min: 1,000 sqft
                    max: 300,000 sqft
                    value: 300,000 sqft
                input
                    type: range
                    label: What is the rentable area square footage?
                    min: 1,000 sqft
                    max: 300,000 sqft
                    value: 200,000 sqft
                input
                    type: checkbox
                    label: base the size of my space on headcount
            headcount & staff
                input
                    type: text
                    label: what is your target headcount?
                input
                    type: text
                    label: for the remaning headcount, what is the average attendance per week?
                input
                    type: range
                    label: What is the rentable area square footage?
                    min: 1,000 sqft
                    max: 300,000 sqft
                    value: 200,000 sqft
    Area Breakdown
        Form
            area defination
                input
                    type: checkbox
                    label: select your amenity spaces
                    dynamic: true,
                    source: data
                dynamic inputs
                    select
                        dynamic: true,
                        source: data
                    input
                        type: number
                        min: 0
                        max: 10
            proportion breakdown
                presentations
                    collapsable
                    pie chart
            project defination
    Requirements
        Form
            finish and certifications
                group
                    03.1.1:
                    title: what is the finish level of your space?
                        input
                            type: radio
                            label: Economic
                            name: finish-level
                        input
                            type: radio
                            label: Mid
                            name: finish-level
                        input
                            type: radio
                            label: High
                            name: finish-level
                    03.1.2:
                    title: what level of leed certification do you need in your space?
                        input
                            type: radio
                            label: Certified
                            name: leed-certification
                        input
                            type: radio
                            label: Silver
                            name: leed-certification
                        input
                            type: radio
                            label: Gold
                            name: leed-certification
                        input
                            type: radio
                            label: Platinum
                            name: leed-certification
                    03.1.3:
                    title: what well certification does your space require?
                        input
                            type: radio
                            label: Silver
                            name: well-certification
                        input
                            type: radio
                            label: Gold
                            name: well-certification
                        input
                            type: radio
                            label: Platinum
                            name: well-certification
                        input
                            type: radio
                            label: WHS
                            name: well-certification
            MEP features
                03.1.1:
                title: what is the finish level of your space?
                    input
                        type: radio
                        label: Economic
                        name: finish-level
                    input
                        type: radio
                        label: Mid
                        name: finish-level
                    input
                        type: radio
                        label: High
                        name: finish-level
            base building conditions
                03.1.1:
                title: what is the finish level of your space?
                    input
                        type: radio
                        label: Economic
                        name: finish-level
                    input
                        type: radio
                        label: Mid
                        name: finish-level
                    input
                        type: radio
                        label: High
                        name: finish-level
            technology
                03.1.1:
                title: what is the finish level of your space?
                    input
                        type: radio
                        label: Economic
                        name: finish-level
                    input
                        type: radio
                        label: Mid
                        name: finish-level
                    input
                        type: radio
                        label: High
                        name: finish-level
            furniture and furnishing
                03.1.1:
                title: what is the finish level of your space?
                    input
                        type: radio
                        label: Economic
                        name: finish-level
                    input
                        type: radio
                        label: Mid
                        name: finish-level
                    input
                        type: radio
                        label: High
                        name: finish-level
            review
                03.1.1:
                title: what is the finish level of your space?
                    input
                        type: radio
                        label: Economic
                        name: finish-level
                    input
                        type: radio
                        label: Mid
                        name: finish-level
                    input
                        type: radio
                        label: High
                        name: finish-level